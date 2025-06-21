/* eslint-disable */
export default async () => {
  const t = {
    ["./common/dto/abstract.dto"]: await import("./common/dto/abstract.dto"),
    ["./modules/post/post.entity"]: await import("./modules/post/post.entity"),
    ["./modules/user/user.entity"]: await import("./modules/user/user.entity"),
    ["./constants/role-type"]: await import("./constants/role-type"),
    ["./modules/user/user-settings.entity"]: await import("./modules/user/user-settings.entity"),
    ["./constants/order"]: await import("./constants/order"),
    ["./common/dto/page-meta.dto"]: await import("./common/dto/page-meta.dto"),
    ["./modules/user/dtos/user.dto"]: await import("./modules/user/dtos/user.dto"),
    ["./modules/auth/dto/token-payload.dto"]: await import("./modules/auth/dto/token-payload.dto"),
    ["./modules/auth/dto/login-payload.dto"]: await import("./modules/auth/dto/login-payload.dto"),
    ["./modules/post/dtos/post.dto"]: await import("./modules/post/dtos/post.dto")
  };
  return {
    "@nestjs/swagger/plugin": {
      "models": [[import("./common/dto/abstract.dto"),
      {
        "AbstractDto": {
          id: { required: true, type: () => Object },
          createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date },
        },
      }], [import("./common/abstract.entity"), {
        "AbstractEntity": {
          id: { required: true, type: () => Object }, createdAt: { required: true, type: () => Date },
          updatedAt: { required: true, type: () => Date },
        },
      }], [import("./modules/post/dtos/post.dto"),
      { "PostDto": { title: { required: false, type: () => String }, description: { required: false, type: () => String }, info: { required: true, type: () => String } } }], [import("./modules/post/post.entity"), {
        "PostEntity": {
          userId: { required: true, type: () => Object },
          user: { required: true, type: () => t["./modules/user/user.entity"].UserEntity },
        }
      }], [import("./modules/user/dtos/user.dto"),
      {
        "UserDto": {
          firstName: { required: false, type: () => String, nullable: true },
          lastName: { required: false, type: () => String, nullable: true },
          username: { required: true, type: () => String },
          role: { required: false, enum: t["./constants/role-type"].RoleType },
          email: { required: false, type: () => String, nullable: true },
          avatar: { required: false, type: () => String, nullable: true },
          phone: { required: false, type: () => String, nullable: true },
          isActive: { required: false, type: () => Boolean }
        }
      }], [import("./modules/user/user-settings.entity"),
      {
        "UserSettingsEntity": {
          isEmailVerified: { required: false, type: () => Boolean },
          isPhoneVerified: { required: false, type: () => Boolean },
          userId: { required: false, type: () => String },
          user: { required: false, type: () => t["./modules/user/user.entity"].UserEntity }
        }
      }], [import("./modules/user/user.entity"),
      {
        "UserEntity": {
          firstName: { required: true, type: () => String, nullable: true },
          lastName: { required: true, type: () => String, nullable: true },
          role: { required: true, enum: t["./constants/role-type"].RoleType },
          email: { required: true, type: () => String, nullable: true },
          password: { required: true, type: () => String, nullable: true },
          phone: { required: true, type: () => String, nullable: true },
          avatar: { required: true, type: () => String, nullable: true },
          fullName: { required: true, type: () => String },
          settings: { required: false, type: () => t["./modules/user/user-settings.entity"].UserSettingsEntity },
          posts: { required: false, type: () => [t["./modules/post/post.entity"].PostEntity] }
        }
      }], [import("./modules/user/dtos/create-settings.dto"),
      { "CreateSettingsDto": { isEmailVerified: { required: false, type: () => Boolean }, isPhoneVerified: { required: false, type: () => Boolean } } }], [import("./common/dto/page-options.dto"), { "PageOptionsDto": { order: { required: true, enum: t["./constants/order"].Order }, page: { required: true, type: () => Number }, take: { required: true, type: () => Number }, q: { required: false, type: () => String } } }], [import("./common/dto/page-meta.dto"), { "PageMetaDto": { page: { required: true, type: () => Number }, take: { required: true, type: () => Number }, itemCount: { required: true, type: () => Number }, pageCount: { required: true, type: () => Number }, hasPreviousPage: { required: true, type: () => Boolean }, hasNextPage: { required: true, type: () => Boolean } } }], [import("./common/dto/page.dto"), { "PageDto": { data: { required: true }, meta: { required: true, type: () => t["./common/dto/page-meta.dto"].PageMetaDto } } }], [import("./modules/user/dtos/users-page-options.dto"), { "UsersPageOptionsDto": {} }], [import("./modules/auth/dto/user-register.dto"), { "UserRegisterDto": { firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, phone: { required: false, type: () => String } } }], [import("./modules/auth/dto/token-payload.dto"), { "TokenPayloadDto": { expiresIn: { required: true, type: () => Number }, token: { required: true, type: () => String } } }], [import("./modules/auth/dto/user-login.dto"), { "UserLoginDto": { email: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./modules/auth/dto/login-payload.dto"), { "LoginPayloadDto": { user: { required: true, type: () => t["./modules/user/dtos/user.dto"].UserDto }, accessToken: { required: true, type: () => t["./modules/auth/dto/token-payload.dto"].TokenPayloadDto } } }], [import("./common/dto/create-translation.dto"),
      {
        "CreateTranslationDto": {
          text: { required: true, type: () => String }
        }
      }],
      [import("./modules/post/dtos/create-post.dto"),
      { "CreatePostDto": {} }], [import("./modules/post/dtos/post-page-options.dto"), { "PostPageOptionsDto": {} }], [import("./modules/post/dtos/update-post.dto"), { "UpdatePostDto": {} }]], "controllers": [[import("./modules/user/user.controller"), { "UserController": { "admin": {}, "getUsers": {}, "getUser": { type: t["./modules/user/dtos/user.dto"].UserDto } } }], [import("./modules/auth/auth.controller"), { "AuthController": { "userLogin": { type: t["./modules/auth/dto/login-payload.dto"].LoginPayloadDto }, "userRegister": { type: t["./modules/user/dtos/user.dto"].UserDto }, "getCurrentUser": { type: t["./modules/user/dtos/user.dto"].UserDto } } }], [import("./modules/health-checker/health-checker.controller"), { "HealthCheckerController": { "check": { type: Object } } }], [import("./modules/post/post.controller"), { "PostController": { "createPost": { type: t["./modules/post/dtos/post.dto"].PostDto }, "getPosts": {}, "getSinglePost": { type: t["./modules/post/dtos/post.dto"].PostDto }, "updatePost": {}, "deletePost": {} } }]]
    }
  };
};