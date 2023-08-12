import { Link } from "preact-router/match";
import { Logo } from "./Logo";
import { JSX } from "preact/jsx-runtime";
import {
  ActivityIndicator,
  AddRounded,
  Explore,
  Home,
  People,
} from "./ui/icons";
import { useAppContext } from "../context";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";

export default function Sidebar() {
  const links: { name: string; icon: JSX.Element; path: string }[] = [
    { name: "For you", icon: <Home />, path: "/" },
    { name: "Following", icon: <People />, path: "/following" },
    { name: "Explore", icon: <Explore />, path: "/explore" },
    { name: "Create", icon: <AddRounded />, path: "/create" },
  ];

  const { isLoading, user } = useAppContext();

  return (
    <aside class="h-full min-w-[300px] border-r border-r-border p-10 flex flex-col">
      <Logo class="mb-10" />

      <nav>
        {links.map((link) => (
          <Link
            href={link.path}
            key={link}
            activeClassName="font-semibold bg-primary active text-muted"
            class="px-4 py-2 hover:bg-secondary flex items-center rounded-lg transition-colors gap-4 mb-2"
          >
            <span class="text-2xl">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </nav>
      <span class="flex-1" />
      {isLoading.value ? (
        <ActivityIndicator class="text-2xl" />
      ) : (
        <>
          {user.value ? (
            <Link
              href="/me"
              activeClassName="text-slate-800 sb-profile-active"
              className="flex items-center flex-row gap-3 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors -mx-4 -mb-4"
            >
              <Avatar url={user.value.photo ?? undefined} />
              <div>
                <div class="font-semibold">{user.value.name}</div>
                <p class="text-muted-foreground text-sm">
                  @{user.value.username}
                </p>
              </div>
            </Link>
          ) : (
            <Button asChild>
              <Link href="/auth">Log in</Link>
            </Button>
          )}
        </>
      )}
    </aside>
  );
}
