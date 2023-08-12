import LoginCard from "../components/LoginCard";
import { Logo } from "../components/Logo";
import SignupCard from "../components/SignupCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function Auth() {
  return (
    <div class="h-full w-full flex items-center justify-center">
      <Logo class="absolute top-10 left-10" />
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Log in</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginCard />
        </TabsContent>
        <TabsContent value="signup">
          <SignupCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
