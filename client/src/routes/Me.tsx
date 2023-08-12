import { route } from "preact-router";
import { useAppContext } from "../context";
import { Avatar } from "../components/ui/avatar";
import { Card, CardHeader } from "../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../components/ui/dropdown";
import { Button } from "../components/ui/button";
import { ActivityIndicator, DotsVertical } from "../components/ui/icons";
import { useSignal } from "@preact/signals";
import { signout } from "../auth";

export default function Me() {
  const { user } = useAppContext();
  const isLoading = useSignal(false);

  if (!user.value) {
    route("/", true);
    return;
  }

  const handleLogout = () => {
    isLoading.value = true;
    signout();
  };

  return (
    <div class="h-full w-full p-10">
      <Card className="overflow-hidden">
        <div class="w-full h-60 relative bg-muted">
          <Avatar
            className="mb-2 absolute left-6 -bottom-12 border-4 border-background"
            size={120}
            url={user.value.photo ?? undefined}
          />
        </div>
        <CardHeader className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="absolute right-6 top-6">
              <Button variant="ghost" disabled={isLoading.value}>
                {isLoading.value ? (
                  <ActivityIndicator className="text-lg" />
                ) : (
                  <DotsVertical class="scale-150" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent className="w-56 mr-2">
                <DropdownMenuItem onClick={handleLogout}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
          <h1 class="font-bold text-xl pt-8">{user.value.name}</h1>
        </CardHeader>
      </Card>
    </div>
  );
}
