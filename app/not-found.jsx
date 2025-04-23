import { HyperText } from 'components/magicui/hyper-text';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <HyperText className="font-bold text-6xl">404 - Not Found</HyperText>
        <Image src="/taken.svg" alt="404" width={600} height={600} />
      </div>
    </div>
  );
}
