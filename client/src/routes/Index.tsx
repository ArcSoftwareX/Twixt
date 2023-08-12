import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";
import {
  ActivityIndicator,
  TextFields,
  AutoVideocam,
} from "../components/ui/icons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const GET_TWIXTS = gql(`
  query Posts($page: Int!) {
    getPosts(page: $page) {
      id
      content
      videoLinks
      imageLinks
      createdAt
      author {
        id
        username
        name
        photo
      }
    }
  }
`);

export default function Index({}: { path: string }) {
  const { loading, data } = useQuery(GET_TWIXTS, {
    variables: {
      page: 0,
    },
  });

  console.log(data);

  return (
    <div class="h-full w-full p-10 relative">
      <Tabs defaultValue="text" className="h-full w-full">
        <div class="absolute inset-x-0 top-10 flex justify-center pointer-events-none">
          <TabsList className="grid grid-cols-2 pointer-events-auto">
            <TabsTrigger value="text" className="text-xl">
              <TextFields />
            </TabsTrigger>
            <TabsTrigger value="video" className="text-xl">
              <AutoVideocam />
            </TabsTrigger>
          </TabsList>
        </div>

        {loading ? (
          <div class="h-full w-full flex items-center justify-center gap-3 text-muted-foreground">
            <ActivityIndicator class="text-xl" />
            <p class="text-sm">Loading...</p>
          </div>
        ) : (
          <>
            <TabsContent value="text">
              {data?.getPosts.map((post) => (
                <div>{post.content}</div>
              ))}
            </TabsContent>

            <TabsContent value="video">
              {data?.getPosts
                .filter((post) => post.videoLinks)
                .map((post) => (
                  <div>{post.content}</div>
                ))}
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
