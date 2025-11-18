export default async function AddComment(props) {
  return (
    <div>
      <form action={props.handleSubmit}>
        <label htmlFor="artwork-comment">Add a Comment: </label>
        <input
          type="text"
          name="comment"
          id="artwork-comment"
          placeholder="Type a Comment Here"
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
