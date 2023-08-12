import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { ActivityIndicator } from "../components/ui/icons";
// import { useEffect, useRef } from "preact/hooks";

interface IFormInput {
  content: string;
}

// TODO: implement good ui & textarea autoresize

export default function Create() {
  const { register, handleSubmit, formState } = useForm<IFormInput>();
  const { errors, isLoading, isSubmitting, isValid } = formState;

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="h-full w-full p-10">
      <h1 className="text-xl font-bold mb-10">Create new Twixt</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="space-y-1">
          <Label htmlFor="content">Content</Label>
          <Textarea
            placeholder="Some awesome content..."
            {...register("content", {
              minLength: 1,
              maxLength: 300,
              required: "Content is required",
            })}
          />
          <p class="text-xs text-red-600">{errors.content?.message}</p>
        </div>
        <Button
          type="submit"
          className="mt-6"
          disabled={!isValid || isLoading || isSubmitting}
        >
          {isSubmitting ? <ActivityIndicator class="text-xl mr-2" /> : null}
          Create
        </Button>
      </form>
    </div>
  );
}
