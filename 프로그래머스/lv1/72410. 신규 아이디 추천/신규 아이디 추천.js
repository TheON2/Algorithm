function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-z\d\-\_\.]/g, "");
  new_id = new_id.replace(/\.+/g, ".");
  new_id = new_id.startsWith(".")?new_id.slice(1):new_id;
  new_id = new_id.endsWith(".")?new_id.substring(0, new_id.length-1):new_id;
  if (new_id.length == 0) {
    new_id = "a";
  }
  if (new_id.length > 15) {
    new_id = new_id.substring(0, 15);
    new_id = new_id.endsWith(".")?new_id.substring(0, new_id.length-1):new_id;
  }
  if (new_id.length <= 2) {
    for (let i = new_id.length; i<3; i++) {
      new_id += new_id.substring(i-1);
    }
  }
  return new_id
}