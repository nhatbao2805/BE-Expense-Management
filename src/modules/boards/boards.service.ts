import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
import { List } from '../lists/entities/list.entity';
import { BoardResponseDto } from './dto/board-respsonse.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    try {
      const board = this.boardRepository.create(createBoardDto);
      const defaultLists = ['Open', 'Close'].map((name, index) => {
        const list = new List();
        list.name = name;
        list.position = index + 1;
        list.board = board;
        return list;
      });
      console.log('defaultLists', defaultLists);
      board.lists = defaultLists;
      const savedBoard = await this.boardRepository.save(board);

      // Duyệt thủ công để ánh xạ sang DTO
      const responseData: BoardResponseDto = {
        id: savedBoard.id,
        name: savedBoard.name,
        lists: savedBoard.lists.map((list) => ({
          id: list.id,
          name: list.name,
          position: list.position,
          is_archived: list.is_archived,
          listTask: list.listTask,
        })),
      };
      return {
        statusCode: 201,
        message: 'Board created successfully',
        data: responseData,
      };
    } catch (error) {
      console.log('error', error);
      throw new BadRequestException('Create board failed');
    }
  }

  async findAll() {
    try {
      const board = await this.boardRepository.find();
      return {
        statusCode: 201,
        message: 'Get list board successfully',
        data: board,
      };
    } catch {
      throw new BadRequestException('Get list board failed');
    }
  }

  async findOne(id: string) {
    try {
      const boardDetail = await this.boardRepository.findOne({
        where: { id },
        relations: ['lists'],
      });
      return {
        statusCode: 201,
        message: 'Get list board successfully',
        data: boardDetail,
      };
    } catch {
      throw new BadRequestException('Get list board failed');
    }
  }

  update(id: string, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: string) {
    return `This action removes a #${id} board`;
  }
}
