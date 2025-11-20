export default async function AddComment(props) {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="flex flex-row w-2/3 h-20 rounded-md p-4 bg-folio-slate mt-4">
        <form
          action={props.handleSubmit}
          className="flex flex-row items-center gap-4 w-full"
        >
          <label
            htmlFor="artwork-comment"
            className="block text-folio-cyan text-sm font-bold mb-2"
          >
            Add a Comment:
          </label>
          <input
            type="text"
            name="comment"
            id="artwork-comment"
            placeholder="Type a Comment Here"
            className="shadow appearance-none border border-folio-cyan text-folio-cyan rounded flex-1 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button type="submit" className="button whitespace-nowrap">
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}
