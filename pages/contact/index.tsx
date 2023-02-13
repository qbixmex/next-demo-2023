import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
import { MainLayout } from '../../components/layouts/MainLayout';
import { LightLayout } from '../../components/layouts/LightLayout';

export const Contact: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="title">
        Contact <span className="blue">Page</span>
      </h1>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit facere commodi distinctio illum deserunt, doloribus alias aperiam mollitia harum illo blanditiis ex incidunt. Saepe.</p>
    </>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <LightLayout>
        { page }
      </LightLayout>
    </MainLayout>
  );
}

export default Contact;
