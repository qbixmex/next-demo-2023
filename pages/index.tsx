import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="title">
        Home <span className="blue">Page</span>
      </h1>
      <p className="description">This is Home Text</p>
    </MainLayout>
  );
}
