// eslint-disable-next-line react/prop-types
function Accordion({ questionObj, isOpen, onHandleAnswer }) {
  // eslint-disable-next-line react/prop-types
  const { id, question, answer } = questionObj;
  const openBoxId = id === isOpen;

  return (
    <div className={openBoxId ? 'item open' : 'item'} onClick={() => onHandleAnswer(id)}>
      <span className='number'>{id}.</span>
      <p className='text'>{question}</p>

      {openBoxId && <div className='content-box'>{answer}</div>}
    </div>
  );
}

export default Accordion;
