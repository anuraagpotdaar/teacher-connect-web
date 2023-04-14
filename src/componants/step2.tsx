import { useContext } from 'react';
import { FormContext } from './FormContext';

const Step2: React.FC = () => {
  const { values, setValues } = useContext(FormContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ step2: e.target.value });
  };

  return (
    <div>
      <label htmlFor="step2">Step 1:</label>
      <input
        id="step2"
        type="text"
        value={values.step2}
        onChange={handleChange}
        className="border border-gray-300 p-2"
      />
    </div>
  );
};

export default Step2;
