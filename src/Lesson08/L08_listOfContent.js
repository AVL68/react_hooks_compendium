import React, { useState } from "react";
import {HeaderForExampl} from "../common/HeaderForExampl";
import CodeHowText from "../common/СodeHowText";
import ReactjsOrg from "../common/ReactjsOrg";
import L08_01_Direction from "./L08_01_Direction";
import L08_02_MyHookLogger from "./L08_02_MyHookLogger";
import L08_03_MyHookInput from "./L08_03_MyHookInput";
import L08_04_MyHookClear from "./L08_04_MyHookClear";

export const L08_listOfContent = () => {
  const [seeExampl01, setSeeExampl01] = useState(false);
  const [seeExampl02, setSeeExampl02] = useState(false);
  const [seeExampl03, setSeeExampl03] = useState(false);
  const [seeExampl04, setSeeExampl04] = useState(false);

  return (
    <>

      <HeaderForExampl
        seeExampl={seeExampl01}
        setSeeExampl={setSeeExampl01}
        label="Первый пример. "
        labelAdd="Дублирование кода"
        WVLFSecond={5689}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson08/L08_01_Direction.js"
      />
      {seeExampl01 ? (
        <>
          <p>При использовании нескольких полей ввода данных:
            <CodeHowText codeText={[`<input type="text" value={name} placeholder="Name" onChange={handlerName} className="me-1"/>`, `<input type="text" value={lastName} placeholder="LastName" onChange={handlerlastName}/>`]}/>
            Часто используется дублирование кода:
            <CodeHowText codeText={[`const handlerName = event => {`, `  setName(event.target.value)}`,`const handlerlastName = event => {`, `  setlastName(event.target.value)}`]}/>
          </p>

          <L08_01_Direction/>

        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl02}
        setSeeExampl={setSeeExampl02}
        label="Второй пример. "
        labelAdd="Хук для слежения."
        WVLFSecond={5871}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson08/L08_02_MyHookLogger.js"
      />
      {seeExampl02 ? (
        <>
          <p>Создаим свой хук для слежения изменнеия состояния. Для этого внутри своего хука будем использовать
            useEffect:
            <CodeHowText
              codeText={[`function useLogger(value , title) {`, `  useEffect(() => {`, "  console.log(`Значение ${title} изменилось на: ${value}`)", `},[value])}`]}/>
          </p>
          <p>Чтобы увидеть результаты изменнеия состояния откройте консоль браузера.</p>
          <L08_02_MyHookLogger/>

        </>
      ) : null}

      <HeaderForExampl
        seeExampl={seeExampl03}
        setSeeExampl={setSeeExampl03}
        label="Третий пример. "
        labelAdd="Оптимизация кода"
        WVLFSecond={5950}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson08/L08_03_MyHookInput.js"
      />
      {seeExampl03 ? (
        <>
          <p>Создадим свой хук для оптимизации кода input:
            <CodeHowText
              codeText={[`function useInput(initialValue) {`,
                `  const [value, setValue] = useState(initialValue)`,
                `  const onChange = event => {`,
                `    setValue(event.target.value)`,
                '    }',
                '  return {',
                '    value, onChange',
                '    }',
                '}']}/>
            Применяем в компоненте:
            <CodeHowText
              codeText={[`const name = useInput("")`, `const lastName = useInput("")`, "...",
                         '<input type="text" value={name.value} placeholder="Name" onChange={name.onChange} className="me-1"/>',
                         '<input type="text" {...lastName} placeholder="LastName" />']}/>

          </p>
          <p>Обратите внимание, что во втором input используется {'{...lastName}'} вместо {'value={lastName.value} onChange={lastName.onChange}'}.</p>
          <L08_03_MyHookInput/>
          <p>Пользовательские хуки — это механизм повторного использования логики с состоянием (например, установка подписки и сохранение текущего значения), но каждый раз, когда вы используете пользовательский хук, всё состояние и эффекты внутри него полностью изолированы.
            <ReactjsOrg href="https://ru.reactjs.org/docs/hooks-custom.html#using-a-custom-hook"/>
          </p>

        </>
      ) : null}


      <HeaderForExampl
        seeExampl={seeExampl04}
        setSeeExampl={setSeeExampl04}
        label="Четвертый пример. "
        labelAdd="Применение."
        WVLFSecond={6160}
        GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson08/L08_04_MyHookClear.js"
      />
      {seeExampl04 ? (
        <>
          <p>Нам нужно иметь возможность очищать поля input. Просто добавляем дополнительный функционал:
            <CodeHowText codeText={[`const clear = () => setValue("")`]}/>

            Применяем в компоненте:
            <CodeHowText
              codeText={[`<button className="btn btn-success me-1" onClick={name.clear}>Очистить name</button>`, "..."]}/>

          </p>
          <p>Обратите внимание, что во втором input используется {'{...lastName}'} вместо {'value={lastName.value} onChange={lastName.onChange}'}.</p>
          <L08_04_MyHookClear/>

        </>
      ) : null}


    </>
  );
};
