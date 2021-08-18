import React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  // SyntheticEvent(합성 이벤트)
  // HTML Input을 사용하고 있기에 HTMLinputElement을 넣어줌. 아니면 onchange에 오류가 난다.
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({
  children,
  onFormSubmit,
}) => <form>{children}</form>;

// input과 Form 제작
