FlowRouter.route("/transactions", {
  action: function () {
    ReactLayout.render(App, {
      content: <TransactionsPage />
    });
  }
});

FlowRouter.route("/", {
  action: function () {
    ReactLayout.render(App, {
      content: <DashboardPage />
    });
  }
});
