import CatGenerator from "@/components/cat_generator";


export default function Home() {
  return (
    <div className="display-page-container">
      <h1 className="text-black text-3xl font-bold pb-12">Random Cat Generator</h1>
      <CatGenerator />
    </div>
  );
}
