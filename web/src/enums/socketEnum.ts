export enum SocketEnum {
  EventPing = 'ping',
  EventConnected = 'connected',
  EventAdminMonitorTrends = 'admin/monitor/trends',
  EventAdminMonitorRunInfo = 'admin/monitor/runInfo',
  EventAdminOrderNotify = 'admin/order/notify',
  TypeQueryUser = 2,
  TypeBoardCastMsg = 3,
  TypeQuerySwitcher = 4,
  TypeQueryEndlessRank = 5,
  TypeSendEmail = 6,
  TypeQueryUserGuide = 7,
  TypeRestartLog = 90,
  HeartBeatInterval = 1000,
  CodeSuc = 0,
  CodeErr = -1,
}
