
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { PageDto } from '../../common/dto/page.dto.ts';
import { Auth } from '../../decorators/http.decorators';
import { CreateTestDto } from './dtos/create-test.dto.ts';
import type { TestDto } from './dtos/test.dto.ts';
import { PageOptionsTestDto } from './dtos/page-options-test.dto.ts';
import { UpdateTestDto } from './dtos/update-test.dto.ts';
import { TestService } from './test.service.ts';

@Controller('tests')
@ApiTags('tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Post()
  @Auth([])
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTestDto: CreateTestDto) {
    const entity = await this.testService.create(createTestDto);
    return entity.toDto();
  }

  @Get()
  @Auth([])
  @HttpCode(HttpStatus.OK)
  getAll(@Query() pageOptionsTestDto: PageOptionsTestDto){
    return this.testService.getAll(pageOptionsTestDto);
  }

  @Get(':id')
  @Auth([])
  @HttpCode(HttpStatus.OK)
  async getSingle(@Param('id') id: string): Promise<TestDto> {
    const entity = await this.testService.getSingle(id as Uuid);
    return entity.toDto();
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() updateTestDto: UpdateTestDto,
  ): Promise<void> {
    return this.testService.update(id as Uuid, updateTestDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async delete(@Param('id') id: string): Promise<void> {
    await this.testService.delete(id as Uuid);
  }
}