import React, { useState, ChangeEvent, FormEvent } from 'react';

interface CommentFormProps {
  onSubmit: (documentId: string, name: string, comment: string) => Promise<void>;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const documentId = 'your-document-id'; // Replace with the actual document ID
    await onSubmit(documentId, name, comment);
    setComment('');
    setName('');
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <input
          className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
      </div>
      <textarea
        className="w-full outline-transparent border border-gray-300 appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  px-3 sm:text-sm py-2"
        placeholder="Write your comment..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <div className="mb-1">
        <button
          className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-reciepeGreen hover:bg-green-500 capitalize focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
