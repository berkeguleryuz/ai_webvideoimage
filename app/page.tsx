"use client";
import Editor from "@/components/Editor";
import { ImageStore } from "@/lib/image-store";
import { LayerStore } from "@/lib/layer-store";

export default function Home() {
  return (
    <LayerStore.Provider
      initialValue={{
        layerComparisonMode: false,
        layers: [
          {
            id: crypto.randomUUID(),
            url: "",
            height: 0,
            width: 0,
            publicId: "",
          },
        ],
      }}>
      <ImageStore.Provider initialValue={{ generating: false }}>
        <main className="h-full">
          <p className="text-5xl flex items-center justify-center py-4 text-lime-500 animate-accordion-down duration-700">BETA and in progress</p>
          <Editor />
        </main>
      </ImageStore.Provider>
    </LayerStore.Provider>
  );
}
