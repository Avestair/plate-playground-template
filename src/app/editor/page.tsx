import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';
import { SettingsProvider } from '@/components/editor/settings';
import SideBar from '@/ui/SideBar';

export default function Page() {
  return (
    <div className="h-screen w-full" data-registry="plate">
      <SideBar />
      <SettingsProvider>
        <PlateEditor />
      </SettingsProvider>

      <Toaster />
    </div>
  );
}
