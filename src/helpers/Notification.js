import NotificationStore from "@/store/Web/Notification";

class Notification {}
export default Notification = new Notification();

export function addNotification(message="message", type="info", duration=3) {
  NotificationStore.state.index += 1;
  let id = NotificationStore.state.index;
  NotificationStore.state.list.push({message, type, duration, id});

  setTimeout(() => {
    NotificationStore.state.list.forEach((item, index) => {
      if (item.id === id) {
        NotificationStore.state.list.splice(index, 1);
      }
    });
  }, duration * 1000);
}
