import { resolve } from 'path'

var Imap = require('imap')
var MailParser = require('mailparser').MailParser
var fs = require('fs')

export const useGetMail = (payload?: any) => {
  return new Promise((resolve) => {
    const html = []
    const { type, emailAddress, password } = payload
    let host = ''
    switch (type) {
      case 'outlook':
        host = 'outlook.office365.com'
        break
      default:
        break
    }
    const imap = new Imap({
      user: emailAddress, //你的邮箱账号
      password: password, //你的邮箱密码
      host, //邮箱服务器的主机地址
      port: 993, //邮箱服务器的端口地址
      tls: true, //使用安全传输协议
      tlsOptions: { rejectUnauthorized: false }, //禁用对证书有效性的检查
    })
    const openInbox = (cb) => {
      imap.openBox('INBOX', false, cb)
    }
    imap.once('ready', function () {
      openInbox(function (err, box) {
        // console.log('打开邮箱')
        if (err) throw err
        imap.search(
          [['UNSEEN'], ['FROM', 'facebook'], ['SINCE', 'May 20, 2017']],
          function (err, results) {
            //搜寻2017-05-20以后未读的邮件
            // imap.seq.addFlags(results, 'Deleted', (err) => {
            //   console.log('Flags added')
            //   imap.expunge(results, (err) => {
            //     console.log('Expunge done')
            //     imap.closeBox(false, (err) => {
            //       console.log('Box closed')
            //       imap.end()
            //       console.log('The end')
            //     })
            //   })
            // })
            if (results.length <= 0) {
              resolve('没有未读的邮件！')
              return
            }
            if (err) throw err
            // imap.setFlags(results, ['\\Seen'], function (err) {
            //   console.log(err, 'err')

            //   if (!err) {
            //     console.log('marked as read')
            //   } else {
            //     console.log(JSON.stringify(err, null, 2))
            //   }
            // })
            var f = imap.fetch(results, {
              bodies: '',
              markSeen: true,
            }) //抓取邮件（默认情况下邮件服务器的邮件是未读状态）

            f.on('message', function (msg, seqno) {
              var mailparser = new MailParser()

              msg.on('body', async function (stream, info) {
                stream.pipe(mailparser) //将为解析的数据流pipe到mailparser
                //邮件头内容
                mailparser.on('headers', function (headers) {
                  // console.log(
                  //   '邮件头信息>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
                  // )
                  // console.log('邮件主题: ' + headers.get('subject'))
                  // console.log('发件人: ' + headers.get('from').text)
                  // console.log('收件人: ' + headers.get('to').text)
                  html.push(headers.get('subject'))
                })

                //邮件内容

                // mailparser.on('data', function (data) {
                //   if (data.type === 'text') {
                //邮件正文
                // console.log(
                //   '邮件内容信息>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
                // )
                // console.log('邮件内容: ' + data.html)
                // }
                // if (data.type === 'attachment') {
                //   //附件
                //   console.log(
                //     '邮件附件信息>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
                //   )
                //   console.log('附件名称:' + data.filename) //打印附件的名称
                //   data.content.pipe(fs.createWriteStream(data.filename)) //保存附件到当前目录下
                //   data.release()
                // }
                // })
              })

              msg.once('end', function () {
                // console.log(seqno + '完成')
              })
            })

            f.once('error', function (err) {
              console.log('抓取出现错误: ' + err)
            })
            f.once('end', function () {
              // console.log('所有邮件抓取完成!')
              imap.end()
            })
          },
        )
      })
    })

    imap.once('error', function (err) {
      resolve('用户不存在，或密码错误！')
    })

    imap.once('end', function () {
      resolve(html)
      console.log('关闭邮箱')
    })
    imap.connect()
  })
}
