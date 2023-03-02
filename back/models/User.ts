import { Model, DataTypes } from "sequelize";
import { sequelize } from "./index";

interface Iuser {
  user_id: number;
  user_uuid: string;
  user_email: string;
  user_nickname: string;
  user_num?: string;
  user_password: string;
  user_refresh_token?: string;
}

class User extends Model<Iuser> {
  public readonly user_id!: number;
  public user_uuid!: string;
  public user_email!: string;
  public user_nickname!: string;
  public user_num?: string;
  public user_password!: string;
  public user_refresh_token?: string;
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_uuid: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    user_email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    user_nickname: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    user_num: {
      type: DataTypes.STRING(10),
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    user_refresh_token: {
      type: DataTypes.STRING(300),
    },
  },
  {
    sequelize: sequelize,
    underscored: true,
    timestamps: false,
    modelName: "User",
    tableName: "user",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default User;
