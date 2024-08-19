'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ProfileTable, TagTable } from '@/data/tempdb';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ScanPageProps {
  params: {
    id: string;
  };
}

const ScanPage = ({ params }: ScanPageProps) => {
  const { id: tagId } = params;
  let statusText = 'Analyzing...';

  // Check if there is a Tag with given ID
  const tag = TagTable.find((t) => t.id === tagId);
  if (!tag) {
    statusText = 'No such Tag found!';
  }

  const TagFormSchema = z.object({
    username: z.string().min(1, {
      message: 'Username is required!',
    }),
  });

  const form = useForm<z.infer<typeof TagFormSchema>>({
    resolver: zodResolver(TagFormSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = (data: z.infer<typeof TagFormSchema>) => {
    alert(`Tag ${tagId} is linked to ${data.username}`);
  };

  // If Tag is NEW and no User assigned, take him to register Tag page.
  // TODO: Move this to a separate component eg: TagForm
  if (tag?.status === 'NEW') {
    return (
      <div className="flex flex-1 flex-col justify-center items-center h-screen">
        <h1 className="text-3xl text-black font-semibold">
          That&apos;s a new tag!
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-12 w-[400px] space-y-8"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Handle</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://instagram.com/example"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Add your social media handle here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    );
  }

  // If Tag is ACTIVE, show/navigate him to respective link
  if (tag?.status === 'ACTIVE') {
    // Fetch respective Profile by TagId and redirect to social media profile
    const profile = ProfileTable.find((p) => p.tagId === tagId);
    if (!profile) {
      statusText = 'Uh-ho! No profile found for this tag.';
    } else {
      statusText = `Opening ${profile.type} - ${profile.url} in a new tab!`;
      window.open(profile.url, '_blank'); // remove the _blank to open in same tab
    }
  }

  if (tag?.status === 'INACTIVE') {
    statusText = 'Uh-ho! Thats a invalid Tag!';
  }

  return (
    <div className="flex flex-1 flex-col justify-center items-center h-screen">
      <h1 className="text-3xl text-black font-semibold">{statusText}</h1>
      <Button asChild variant="default" className="mt-6">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default ScanPage;
