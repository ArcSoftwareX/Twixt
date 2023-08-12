import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ActivityIndicator } from "./ui/icons";
import { signup } from "../auth";
import toast from "react-hot-toast";
import { useAppContext } from "../context";
import { route } from "preact-router";

interface IFormInputs {
  name: string;
  username: string;
  email: string;
  password: string;
}

export default function SignupCard() {
  const { register, handleSubmit, formState } = useForm<IFormInputs>();
  const { errors, isLoading, isSubmitting, isValid } = formState;
  const { reloadUser } = useAppContext();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const res = await signup(
      data.name,
      data.username,
      data.email,
      data.password
    );

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
        <CardTitle>Create account</CardTitle>
        <CardDescription>Create new account to access Twixt.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-2">
          <div class="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              autoComplete="off"
              {...register("name", {
                maxLength: 255,
                required: "Name is required",
              })}
            />
            <p class="text-xs text-red-600">{errors.name?.message}</p>
          </div>
          <div class="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              autoComplete="off"
              {...register("username", {
                maxLength: 255,
                required: "Username is required",
              })}
            />
            <p class="text-xs text-red-600">{errors.username?.message}</p>
          </div>
          <div class="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              autoComplete="off"
              {...register("email", {
                maxLength: 255,
                required: "Email is required",
              })}
            />
            <p class="text-xs text-red-600">{errors.email?.message}</p>
          </div>
          <div class="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="off"
              {...register("password", {
                minLength: 8,
                required: "Password is required",
              })}
            />
            <p class="text-xs text-red-600">{errors.password?.message}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            disabled={isLoading || !isValid || isSubmitting}
          >
            {isLoading || isSubmitting ? (
              <ActivityIndicator class="text-lg mr-2" />
            ) : null}
            Create account
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
