"use client";

import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";

export const WidgetView = ({ organizationId }: { organizationId: string }) => {
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetAuthScreen />
    </main>
  );
};
