import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import { animationDown } from './animate';
import  './styles.css';

const shapeElement = document.querySelector('.animated-shape') as HTMLElement;

animationDown(shapeElement).subscribe(terminalLog);