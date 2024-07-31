import Button from './Button';
import data from '../utils/data.json';

const ButtonGroup = () => {
  return (
    <div className="grid grid-cols-4">
      {data.map((el) => (
        <Button
          key={el.title}
          zeroStyle={el.title === '0' && 'col-span-2'}
          operatorStyle={
            (el.type === 'operator' || el?.style === 'right') &&
            'bg-orange-400 text-white'
          }
          title={el.title}
        />
      ))}
    </div>
  );
};


export default ButtonGroup;
