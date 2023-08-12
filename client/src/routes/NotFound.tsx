import { Link } from "preact-router/match";
import { Button } from "../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function NotFound({}: { default: boolean }) {
  return (
    <div class="h-full w-full flex items-center justify-center flex-col">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Not found</CardTitle>
          <CardDescription>This page does not exist</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/">Return to homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
