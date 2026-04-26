import { LoginForm } from "./login-form";

export const metadata = { title: "Sign in · PM Journal" };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold tracking-tight">PM Journal</h1>
          <p className="text-sm text-muted-foreground">
            Sign in with a magic link sent to your email.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
