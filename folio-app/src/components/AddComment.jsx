export default async function AddComment(props) {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-2/3 h-20 rounded-md  p-4 bg-folio-slate mt-4 ">
        <form action={props.handleSubmit}>
          <label htmlFor="artwork-comment">Add a Comment: </label>
          <input
            type="text"
            name="comment"
            id="artwork-comment"
            placeholder="Type a Comment Here"
          />
          <button type="submit" className="button">
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}
