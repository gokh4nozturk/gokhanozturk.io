import Image from "next/image";

import { DefaultLayout } from "../layouts/Default";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="text-3xl font-bold underline">Preparing!</div>
    </DefaultLayout>
  );
}
