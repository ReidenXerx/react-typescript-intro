import React, { useRef, FC } from 'react'
import { ITest1 } from "../interfaces";

interface TodoFormProps {
  onAdd(title: string): void
}

function unlimitedCompare<T>(object1: T, object2: T) {
  
  for (const crmUserInfoNextKey in crmUserInfoNext) {
    if (crmUserInfoNext.hasOwnProperty(crmUserInfoNextKey)
      && crmUserInfoNext.hasOwnProperty(crmUserInfoNextKey)) {
      if (crmUserInfoPrevCopy[crmUserInfoNextKey] !== crmUserInfoNextCopy[crmUserInfoNextKey]) {
        return false;
      }
    }
  }

  for (let key in object) {
    iterator = iterator + 1
    console.log(`keyPrefix ${keyPrefix} iterator ${iterator}`)
    if (object.hasOwnProperty(key)) {
      if (typeof (object[key]) == 'object') {
        console.log(`${keyPrefix} ${key}`)
        keyPrefix.push(key)
        recursive(object[key], keyPrefix)
      }
      else {
        objectBuffer[`${keyPrefix.join('.')}.${key}`] = object[key]
        // console.log(objectBuffer)
        // console.log(keyPrefix)

      }
    }
  }
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  const test1: ITest1 = {
    attribute_1lvl_1: 'test1',
    attribute_1lvl_2: 10,
    attrubute_1lvl_3: true,
    attribute_1lvl_4: {
      attribute_2lvl_1: 'test2',
      attribute_2lvl_2: 15,
      attrubute_2lvl_3: false
    }
  }

  const test2: ITest1 = {
    attribute_1lvl_1: 'test21',
    attribute_1lvl_2: 25,
    attrubute_1lvl_3: true,
    attribute_1lvl_4: {
      attribute_2lvl_1: 'test22',
      attribute_2lvl_2: 37,
      attrubute_2lvl_3: false
    }
  }

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log(title)
      // setTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  )
}
