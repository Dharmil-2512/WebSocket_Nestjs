/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'socket.io';
import { MessageBodyDto } from './dtos/message-body.dto';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;
  handleConnection(client: Socket) {
    // Handle connection event
  }

  handleDisconnect(client: Socket) {
    // Handle disconnection event
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: MessageBodyDto,
    @ConnectedSocket() client: Socket,
  ) {
    this.server.emit('receive-message', data);
  }
}
