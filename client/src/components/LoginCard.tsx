import { login } from "../auth";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ActivityIndicator } from "./ui/icons";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import toast from "react-hot-toast";

import { useForm, type SubmitHandler } from "react-hook-form";
import { route } from "preact-router";
import { useAppContext } from "../context";

interface IFormInput {
  username: string;
  password: string;
}

export default function LoginCard() {
  const { register, handleSubmit, formState } = useForm<IFormInput>();
  const { errors, isLoading, isValid, isSubmitting } = formState;
  const { reloadUser } = useAppContext();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await login(data.username, data.password);

    if (!res.token) {
      toast.error(res.message);
      return;
    }

    toast.success(res.message);

    reloadUser();

    route("/", true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>
          Log in to your account to access Twixt.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-2">
          <div class="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              autoComplete="off"
              {...register("username", {
                required: "Username is required",
                maxLength: 255,
              })}
            />
            <p class="text-xs text-red-500 pt-1">{errors.username?.message}</p>
          </div>
          <div class="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="off"
              {...register("password", {
                required: "Password is required",
                minLength: 8,
              })}
            />
            <p class="text-xs text-red-600 pt-1">{errors.password?.message}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            disabled={!isValid || isLoading || isSubmitting}
          >
            {isLoading || isSubmitting ? (
              <ActivityIndicator class="text-lg mr-2" />
            ) : null}
            Log in
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
