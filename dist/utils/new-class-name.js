import sh from 'shorthash';

const newClassName = text => {
  return `cq-${sh.unique(text)}`;
};

export default newClassName;