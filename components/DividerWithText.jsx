const DividerWithText = ({ children }) => (
  <div className="text-yellow-400 w-64 mt-8 flex justify-center items-center">
    <hr className="w-5/12 border-solid border-2 border-light-blue-500" />
    <div className="mx-4 font-bold tracking-wider">{children}</div>
    <hr className="w-5/12 border-solid border-2 border-light-blue-500" />
  </div>
);

export default DividerWithText;
