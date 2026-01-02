import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ButtonGroup } from '@/components/ui/button-group';

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json() as Promise<{ title: string; body: string }[]>
};

export default async function Page() {
  const posts = await getPosts();

  return <div className="container pt-20">
    <div className="mt-20 bg-card text-center w-1/2 mx-auto flex gap-4 flex-col items-center">
      <h1 className="font-thin text-7xl">Blog posts</h1>
      <span>Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.</span>
    </div>
    <div className="my-20 flex flex-col gap-8 justify-center items-center">
      <div className="p-4 z-20">
        <ButtonGroup>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <InputGroup>
            <InputGroupInput placeholder="Type to search..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="outline">Search</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </ButtonGroup>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col justify-between border transition-all duration-400 max-w-md bg-card backdrop-blur-md z-20 p-4 rounded-md cursor-pointer hover:border-primary hover:border-dashed hover:shadow-lg">
            <h3 className="text-2xl mb-2">{post.title}</h3>
            <div className="flex gap-2 my-1">
              <Badge variant="outline">New</Badge>
              <span>•</span>
              <span className=''>20 October 2025.</span>
            </div>
            <p className="text-muted-foreground my-2">{post.body}</p>
            <div className="flex justify-end mt-4">
              <Button size="sm" variant="outline">
                See more <ArrowRightIcon className="w-4"/>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}
