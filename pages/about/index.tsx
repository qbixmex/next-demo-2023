import { MainLayout } from '../../components/layouts/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <h1 className="title">
        About <span className="blue">Page</span>
      </h1>
      <p className="description">About Text</p>
    </MainLayout>
  );
}
