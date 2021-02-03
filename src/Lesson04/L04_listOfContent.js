import React, {useState} from "react"
import {HeaderForExampl} from "../common/HeaderForExampl"
import СodeHowText from "../common/СodeHowText"
import L04_01_42 from "./L04_01_42"
import L04_02_useMemo from "./L04_02_useMemo"
import L04_03_object from "./L04_03_object"
import L04_04_useMemoForObject from "./L04_04_useMemoForObject"

export const L04_listOfContent = () => {
    const [seeExampl01, setSeeExampl01] = useState(false)
    const [seeExampl02, setSeeExampl02] = useState(false)
    const [seeExampl03, setSeeExampl03] = useState(false)
    const [seeExampl04, setSeeExampl04] = useState(false)

    return (
        <>
            <h3>Есть задача: Оптимизация производительности.</h3>

            <HeaderForExampl
                seeExampl={seeExampl01}
                setSeeExampl={setSeeExampl01}
                label="Первый пример. "
                labelAdd="Не эффективный рендеринг."
                WVLFSecond={2887}
                GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson04/L04_01_42.js"
            />
            {seeExampl01 ? (
                <>
                    <p>Для расчета вычисляемого свойства используется долгий расчет.
                        <СodeHowText codeText={[`function complexCompute(num) {...`]}/>
                    </p>
                    <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>

                    <L04_01_42/>

                    <div className="alert alert-danger" role="alert">
                        <p className="mb-0">
                            Расчет вычисляемого свойства происходит и при добавлении и вычитании, что опрадано. Также
                            расчет
                            вычисляемого свойства происходит во время изменения цвета. Это уменьшает эффективность
                            рендеринга
                            компоненты.
                        </p>
                    </div>

                </>
            ) : null}


            <HeaderForExampl
                seeExampl={seeExampl02}
                setSeeExampl={setSeeExampl02}
                label="Второй пример. "
                labelAdd="Применяем useMemo."
                WVLFSecond={3237}
                GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson04/L04_02_useMemo.js"
            />
            {seeExampl02 ? (
                <>
                    <p>Расчет вычисляемого свойства обернули хуком useMemo. Вторым параметром передали зависимость
                        расчета.
                        <СodeHowText
                            codeText={[`const computed = useMemo(() => {return complexCompute(number)},[number])`]}/>
                    </p>
                    <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>

                    <L04_02_useMemo/>

                    <div className="alert alert-warning" role="alert">
                        <p className="mb-0">
                            Расчет вычисляемого свойства происходит при добавлении и вычитании, что опрадано. Расчет
                            вычисляемого свойства не происходит во время изменения цвета, что лучше сказывается на
                            эффективность
                            рендеринга
                            компоненты.
                        </p>
                    </div>

                </>
            ) : null}

            <h3>Есть задача: Оптимизация при работе с объектами.
            </h3>

            <HeaderForExampl
                seeExampl={seeExampl03}
                setSeeExampl={setSeeExampl03}
                label="Третий пример. "
                labelAdd="Проблема при работе с объектами."
                WVLFSecond={3348}
                GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson04/L04_03_object.js"
            />
            {seeExampl03 ? (
                <>
                    <p>Для отслеживания изменения цвета используется useEffect.
                        <СodeHowText
                            codeText={[`useEffect(()=>{`, `console.log("Changed object of styleColor.")`, `},[styleColor])`]}/>
                    </p>
                    <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>

                    <L04_03_object/>

                    <div className="alert alert-danger" role="alert">
                        <p className="mb-0">
                            Сообщение про изменение объекта styleColor появляется при нажатии на любую кнопку. Это
                            уменьшает эффективность рендеринга
                            компоненты.
                        </p>
                    </div>

                </>
            ) : null}

            <HeaderForExampl
                seeExampl={seeExampl04}
                setSeeExampl={setSeeExampl04}
                label="Четвертый пример. "
                labelAdd="Применяем useMemo для объекта."
                WVLFSecond={3475}
                GHFile="https://github.com/AVL68/react_hooks_compendium/blob/master/src/Lesson04/L04_04_useMemoForObject.js"
            />
            {seeExampl04 ? (
                <>
                    <p>Создание объекта обернули хуком useMemo. Вторым параметром передали зависимость.
                        <СodeHowText
                            codeText={[`const styleColor = useMemo(()=>({color: colored ? "darkred" : "black"}),[colored])`]}/>
                    </p>
                    <p>Чтобы увидеть результаты рендеринга откройте консоль браузера.</p>

                    <L04_04_useMemoForObject/>

                    <div className="alert alert-warning" role="alert">
                        <p className="mb-0">
                            Теперь при добавлении и вычитании нет сообщения про изменение объекта styleColor
                            , что лучше сказывается на эффективность рендеринга компоненты.
                        </p>
                    </div>

                </>
            ) : null}


        </>
    )
}
