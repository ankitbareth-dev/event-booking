export const notifyCustomers = (eventId: string, customers: string[]) => {
  setTimeout(() => {
    console.log(`
====================================
EVENT UPDATED
====================================
Event: ${eventId}

Customers to notify:
`);

    customers.forEach((customer) => {
      console.log(`Notification sent to ${customer}`);
    });

    console.log("====================================");
  }, 0);
};
