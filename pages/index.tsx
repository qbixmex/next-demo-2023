import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="title">
        Home <span className="blue">Page</span>
      </h1>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit facere commodi distinctio illum deserunt, doloribus alias aperiam mollitia harum illo blanditiis ex incidunt. Saepe.</p>
    </MainLayout>
  );
}
