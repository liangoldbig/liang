import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TableComponent() {
  const data = [
    {
      id: 1,
      name: "张三",
      email: "zhangsan@example.com",
      status: "活跃",
    },
    {
      id: 2,
      name: "李四",
      email: "lisi@example.com",
      status: "离线",
    },
    {
      id: 3,
      name: "王五",
      email: "wangwu@example.com",
      status: "活跃",
    },
    {
      id: 4,
      name: "赵六",
      email: "zhaoliu@example.com",
      status: "离线",
    },
    {
      id: 5,
      name: "钱七",
      email: "qianqi@example.com",
      status: "活跃",
    },
  ]

  return (
    <div className="w-full p-4">
      <Table>
        <TableCaption>用户列表</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>姓名</TableHead>
            <TableHead>邮箱</TableHead>
            <TableHead className="text-right">状态</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${user.status === "活跃" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                >
                  {user.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
