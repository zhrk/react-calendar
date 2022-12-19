import { createRoot } from 'react-dom/client';
import { Root } from './components/Root';
import './styles/global.scss';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<Root />);
}
