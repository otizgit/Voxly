import { z } from "zod";

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
// const strongPassword = z
//   .string()
//   .min(8, "Password must be at least 8 characters")
//   .regex(
//     passwordRegex,
//     "Password must contain uppercase, lowercase, number, and symbol"
//   );

const strongPassword = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .refine((val) => /[A-Z]/.test(val), {
    message: "Must contain at least one uppercase letter",
  })
  .refine((val) => /[a-z]/.test(val), {
    message: "Must contain at least one lowercase letter",
  })
  .refine((val) => /\d/.test(val), {
    message: "Must contain at least one number",
  })
  .refine((val) => /[^A-Za-z0-9]/.test(val), {
    message: "Must contain at least one symbol",
  });

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const signupSchema = z
  .object({
    displayName: z
      .string()
      .min(2, "Display name must be at least 2 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),

    password: strongPassword,

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type SignupSchemaType = z.infer<typeof signupSchema>;
