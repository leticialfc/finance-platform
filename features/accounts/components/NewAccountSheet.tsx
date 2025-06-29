import z from "zod";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { AccountForm } from "./AccountForm/AccountForm";

import { useNewAccount } from "../hooks/use-new-account";
import { useCreateAccount } from "../api/use-create-account";

const formSchema = z.object({
    name: z.string()
});

type FormValues = z.infer<typeof formSchema>;

export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount();

    const mutation = useCreateAccount();

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
            onSuccess: () => {
                onClose();
            }
        });
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>New Account</SheetTitle>
                    <SheetDescription>Create a new account to track your transactions.</SheetDescription>
                </SheetHeader>
                <AccountForm
                    onSubmit={onSubmit}
                    disabled={mutation.isPending}
                    defaultValues={{ name: "" } as FormValues}
                />
            </SheetContent>
        </Sheet>
    );
}

export default NewAccountSheet;