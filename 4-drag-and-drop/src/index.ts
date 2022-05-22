import '../../assets/css/style.css';
import { box, boxDrag$ } from './drag-and-drop';
import  './styles.css';

boxDrag$.subscribe({
    next: ({left, top}) => {
        box.style.left = `${left}px`;
        box.style.top = `${top}px`;
    },
    complete: () => console.log('COMPLETE'),
})