import { MainLayout } from '../../components/layouts/MainLayout';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <MainLayout>
      <h1 className="title">
        Pricing <span className="blue">Page</span>
      </h1>
      <table className={ styles.pricing }>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lap Top Dell</td>
            <td>$ 875.25</td>
          </tr>
          <tr>
            <td>Mouse Drive</td>
            <td>$ 12.55</td>
          </tr>
          <tr>
            <td>Monitor Screen</td>
            <td>$ 150.25</td>
          </tr>
          <tr>
            <td>Energy Breaker</td>
            <td>$ 200.75</td>
          </tr>
        </tbody>
      </table>
    </MainLayout>
  );
}